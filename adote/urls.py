
from django.contrib import admin
from django.urls import path, include 
from django.conf import settings
from django.conf.urls.static import static
from. import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.adote, name='adote'),
    path('auth/', include('usuarios.urls')),
    path('divulgar/', include('divulgar.urls')),
    path('adotar/', include('adotar.urls')),

    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#handler404 = "adotar.views.erro"
