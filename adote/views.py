#from django.shortcuts import adote
from django.shortcuts import render

def adote(request):
    return render(request, 'index.html', {})