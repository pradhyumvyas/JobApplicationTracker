from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def welcomeAPI(request):
    return HttpResponse("Welcome To The API")