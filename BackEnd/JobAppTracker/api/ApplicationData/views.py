# from django.shortcuts import render

# Create your views here.


from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets

# Create your views here.

from .serializers import DataSerializer
from .models import ApplicationData

class DataViewSet(viewsets.ModelViewSet):
    queryset = ApplicationData.objects.all()

    serializer_class = DataSerializer
