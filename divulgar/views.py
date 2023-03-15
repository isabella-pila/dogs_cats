from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Pet, Tag, Raca,Sexo,Porte, Animal
from django.contrib import messages
from django.contrib.messages import constants
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
from adotar.models import PedidoAdocao
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
import cloudinary
import cloudinary.uploader
from django.shortcuts import render
from .forms import PetForm

@login_required
def novo_pet(request):
    if request.method == "GET":
        animals = Animal.objects.all()
        tags = Tag.objects.all()
        racas = Raca.objects.all()
        sexos = Sexo.objects.all()
        portes = Porte.objects.all()
        
        return render(request, 'novo_pet.html', { 'animals':animals, 'tags': tags, 'racas': racas, 'sexos':sexos, 'portes':portes })
    elif request.method == "POST":
        foto = request.FILES.get('foto')
        nome = request.POST.get('nome')
        animal = request.POST.get('animal')
        descricao = request.POST.get('descricao')
        estado = request.POST.get('estado')
        cidade = request.POST.get('cidade')
        telefone = request.POST.get('telefone')
        tags = request.POST.getlist('tags')
        raca = request.POST.get('raca')
        sexo = request.POST.get('sexo')
        porte = request.POST.get('porte')
        
       #   

    pet = Pet(
            usuario=request.user,
            foto=foto,
            nome=nome,
            descricao=descricao,
            estado=estado,
            cidade=cidade,
            telefone=telefone,
            raca_id=raca,
            sexo_id=sexo,
            porte_id=porte,
            animal_id=animal,
        )
    
    pet.save()



    pet.save()
        
    for tag_id in tags:
            tag = Tag.objects.get(id=tag_id)
            pet.tags.add(tag)

    pet.save()
        #tags = Tag.objects.all()
        #racas = Raca.objects.all()
        #messages.add_message(request, constants.SUCCESS, 'Novo pet cadastrado')

  
    return redirect('/divulgar/seus_pets') 

@login_required
def seus_pets(request):
    if request.method == "GET":
        pets = Pet.objects.filter(usuario=request.user)
        return render(request, 'seus_pets.html', {'pets': pets})

@login_required
def remover_pet(request, id):
    
    

    pet = Pet.objects.get(id=id, usuario=request.user)
    pedido_adocao = PedidoAdocao.objects.filter(pet=pet)
    if pedido_adocao:
        pedido_adocao.delete()
        
    
    if not pet.usuario == request.user:
      messages.add_message(request, constants.ERROR, 'Esse pet não e seu, espertinho haha.')
      return redirect('/divulgar/seus_pets') 
    
    base_url = str(pet.foto)

    a1= 'image/upload/v1678210063/'

    url =  base_url.replace(a1,"")
    image_url = url.split('.')[-1]

    cloudinary.uploader.destroy(image_url)
   

    pet.delete()
   
    messages.add_message(request, constants.SUCCESS, 'Removido com sucesso.')
    return redirect('/divulgar/seus_pets') 



@login_required
def ver_pet(request, id):
    if request.method == "GET":
        pet = Pet.objects.get(id = id)
        return render(request, 'ver_pet.html', {'pet': pet})



@login_required
def ver_pedido_adocao(request):

    pet =Pet.objects.filter(usuario=request.user)
    if request.method == "GET":
        pedidos = PedidoAdocao.objects.filter(pet__in=pet, status="AG")
        return render(request, 'ver_pedido_adocao.html', {'pedidos': pedidos})
    
    

   # if request.method == "GET"  : 
    #       pedidos = PedidoAdocao.objects.filter(usuario=request.user).filter(status="AG")
     #      return render(request, 'ver_pedido_adocao.html', {'pedidos': pedidos})


    


def dashboard(request):
    if request.method == "GET":
        return render(request, 'dashboard.html')

@csrf_exempt
def api_adocoes_por_raca(request):
    racas = Raca.objects.all()

    qtd_adocoes = []
    for raca in racas:
        adocoes = PedidoAdocao.objects.filter(pet__raca=raca).filter(status="AP").count()
        qtd_adocoes.append(adocoes)

    racas = [raca.raca for raca in racas]
    data = {'qtd_adocoes': qtd_adocoes,
            'labels': racas}

    return JsonResponse(data)





@login_required
def edit_pet(request, id):
    pet = get_object_or_404(Pet, id=id)
    if request.method == 'POST':
        form = PetForm(request.POST, request.FILES, instance=pet)
        if form.is_valid():
            form.save()
            messages.success(request, 'Perfil do pet atualizado com sucesso.')
            return redirect('/divulgar/seus_pets') 
    else:
        form = PetForm(instance=pet)
    return render(request, 'edit_pet.html', {'form': form})





    