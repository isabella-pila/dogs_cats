from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField

class Animal(models.Model):
    animal = models.CharField(max_length=50)
    def _str_(self):
        return self.animal

class Raca(models.Model):
    raca = models.CharField(max_length=50)
    animal=models.ForeignKey(Animal,on_delete=models.DO_NOTHING)
    def __str__(self):
        return self.raca


class Sexo(models.Model):
    sexo = models.CharField(max_length=20)
    def __str__(self):
        return self.sexo
    
class Porte(models.Model):
    porte = models.CharField(max_length=20)

    def __str__(self):
        return self.porte
    
class Tag(models.Model):
    tag = models.CharField(max_length=100)

    def __str__(self):
        return self.tag



class Pet(models.Model):
    choices_status =(('P',"Para adoção"),
                     ('A','Adotado'))
    
    usuario = models.ForeignKey(User,on_delete=models.DO_NOTHING)
    foto = CloudinaryField('foto')
    nome = models.CharField(max_length=100)
    animal = models.ForeignKey(Animal,on_delete=models.DO_NOTHING)
    descricao = models.TextField()
    estado = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    telefone = models.CharField(max_length=15)
    tags = models.ManyToManyField(Tag)
    raca = models.ForeignKey(Raca,on_delete=models.DO_NOTHING)
    sexo = models.ForeignKey(Sexo,on_delete=models.DO_NOTHING)
    porte = models.ForeignKey(Porte,on_delete=models.DO_NOTHING)
    status = models.CharField( max_length=1, choices= choices_status,default='P')
    
   

    def _str_(self):
        return self.nome
    



    
    

