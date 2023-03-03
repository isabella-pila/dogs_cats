from django import forms
from .models import Pet

class PetForm(forms.ModelForm):
    class Meta:
        model = Pet
        fields = ['nome', 'descricao', 'animal', 'estado', 'cidade','telefone','tags','raca','sexo','porte','foto']
