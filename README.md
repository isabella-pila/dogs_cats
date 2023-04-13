# Ado.te

Projeto de doações de animais 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

* Python 3.07
* HtML CSS Javascript
* PostgreSQL 12
* GIT
* Django


### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

### Primeiro devemos criar o ambiente virtual:
   Linux  
  python3 -m venv venv  
   Windows 
   python -m venv venv
   
### Após a criação do venv vamos ativa-lo:

 Linux   
source venv/bin/activate 
 Windows  
 venv\Scripts\Activate  
### Caso algum comando retorne um erro de permissão execute o código e tente novamente:  
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

### Agora vamos fazer a instalação do Django e as demais bibliotecas:
pip install django
pip install pillow

### Vamos criar o nosso projeto em Django:
django-admin startproject adote .

### Crie um novo app:
python manage.py startapp usuarios

### Crie uma URL para o app usuários:
path('auth/', include('usuarios.urls')),


## ⚙️ Executando os testes

poetry run python manage.py runserver


## 🛠️ Construído com

* Django- O framework web usado

### fluxograma
![Adote drawio](https://user-images.githubusercontent.com/102629077/231767517-8099f7c2-5fb0-4e40-ac60-e484c1731dec.svg)

###  Modelo Logico do banco de dados
![adote_banco3](https://user-images.githubusercontent.com/102629077/231767943-22307152-8642-453f-9c72-a9804f69498d.png)


---
