from django.urls import path
from. import views
from django.contrib.auth import views as auth_views


urlpatterns= [
   path('cadastro/',views.cadastro, name="cadastro"),
   path('',views.logar, name="login"),
   path('sair/', views.sair,name="sair"),
   
   
   
]
