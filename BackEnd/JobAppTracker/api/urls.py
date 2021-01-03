

from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.welcomeAPI),
    path('user/', include('api.user.urls')),
    path('ApplicationData/', include('api.ApplicationData.urls'))
]
