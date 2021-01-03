from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    firstName = models.CharField(max_length=50, default='Anonymous')
    lastName = models.CharField(max_length=50, default='Anonymous')

    userName = models.CharField(max_length=100, unique=True)

    USERNAME_FIELDS = 'userName'

    sessionToken = models.CharField(max_length=10, default=0)

    phone = models.CharField(max_length=20, blank=True, null=True)

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)