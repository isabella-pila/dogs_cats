#from django.shortcuts import adote
from django.shortcuts import render
from divulgar.models import Pet, Raca
from django.contrib.auth.decorators import login_required


def adote(request):
     if request.method == "GET":
        pets = Pet.objects.filter(status='P')
        racas = Raca.objects.all()

     cidade = request.GET.get('cidade')
     raca_filter = request.GET.get('raca')
    
     return render(request, 'index.html',  {'pets': pets, 'racas': racas, 'cidade': cidade, 'raca_filter': raca_filter })

