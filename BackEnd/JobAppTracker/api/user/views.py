from django.shortcuts import render

# Create your views here.


from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def welcomeUserAPI(request):
    return HttpResponse("Welcome To The User API")