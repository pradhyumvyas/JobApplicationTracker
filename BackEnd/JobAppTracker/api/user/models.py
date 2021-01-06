from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    firstName = models.CharField(max_length=50, default='')
    lastName = models.CharField(max_length=50, default='')

    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS =[]

    session_token = models.CharField(max_length=10, default=0)

    phone = models.CharField(max_length=20, blank=True, null=True)

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)