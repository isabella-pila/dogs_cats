from django.shortcuts import render
from divulgar.models import Pet, Raca,Animal
from django.shortcuts import redirect
from django.contrib.messages import constants
from django.contrib import messages
from .models import PedidoAdocao
from  datetime import datetime
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404

@login_required


def listar_pets(request):
    pets = Pet.objects.filter(status='P')
    racas = Raca.objects.all()
    animals = Animal.objects.all()

    cidade = request.GET.get('cidade')
    raca_filter = request.GET.get('raca')
    animal_filter = request.GET.get('animal')

    if cidade:
        pets = pets.filter(cidade__icontains=cidade)

    if raca_filter:
        pets = pets.filter(raca__id=raca_filter)
        raca_filter = Raca.objects.get(id=raca_filter)

    if animal_filter:
        pets = pets.filter(animal__id=animal_filter)
        animal_filter = Animal.objects.get(id=animal_filter)

    paginator = Paginator(pets,6)
    page = request.GET.get('page')
    pets_list = paginator.get_page(page)



    return render(request, 'listar_pets.html', {'pets': pets,'animals':animals, 'racas': racas, 'cidade': cidade, 'raca_filter': raca_filter,'animal_filter':animal_filter, 'pets_list': pets_list})


@login_required
def pedido_adocao(request, id_pet):
    pet = Pet.objects.filter(id=id_pet).filter(status="P")

    pedido = PedidoAdocao(pet=pet.first(),
                          usuario=request.user,
                          data=datetime.now())

    pedido.save()
    if pedido.status=="AP":
        messages.add_message(request, constants.ERROR, 'Esse pet já foi adotado :)')
        return redirect('/adotar')

    else:
       messages.add_message(request, constants.SUCCESS, 'Pedido de adoção realizado, você receberá um e-mail caso ele seja aprovado.')
       return redirect('/adotar')


    

def processa_pedido_adocao(request, id_pedido):
    pedido = PedidoAdocao.objects.get(id=id_pedido)
    pet = pedido.pet

    status = request.GET.get('status')
    if status == "A":
        # Atualiza o status do pet para adotado
        pet.status = 'A'
        pet.save()

        # Atualiza o status do pedido para aprovado
        pedido.status = 'AP'
        string = '''Olá, sua adoção foi aprovada. Parabéns pelo novo membro da família!'''
    elif status == "R":
        # Atualiza o status do pedido para recusado
        pedido.status = 'R'
        string = '''Olá, sua adoção foi recusada. Infelizmente, o pet já foi adotado ou o pedido não foi aprovado.'''

    pedido.save()

    # Envia o e-mail para o usuário
    send_mail(
        'Status da sua adoção',
        string,
        'caio@pythonando.com.br',
        [pedido.usuario.email],
        fail_silently=False,
    )

    messages.success(request, 'Pedido de adoção processado com sucesso')
    return redirect('/divulgar/seus_pets')




