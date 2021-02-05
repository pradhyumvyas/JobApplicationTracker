from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import User
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
import re

import random


def generateSessionToken(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] + [str(i) for i in range(10)]) for _ in range(length) )


@csrf_exempt
def signin(request):
    if not request.method =="POST":
        return JsonResponse({'error': 'Send POST request'})

    username = request.POST['username']
    password = request.POST['password']

    # if not re.match("", email):
    #     return JsonResponse({'error': "Enter Valid Email"})

    if len(password)<3:
        return JsonResponse({'error': 'password is less than 5 digit'})

    
    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(username = username)

        if user.check_password(password):
            usr_dict = UserModel.objects.filter(username=username).values().first()
            usr_dict.pop('password')

            if user.session_token != "0":
                user.session_token = "0"
                user.save()
                return JsonResponse({'error': 'Previous session exists..!'})

            token = generateSessionToken()
            user.session_token = token
            user.save()
            login(request, user)
            return JsonResponse({'token': token, 'user':usr_dict})
        else:
            return JsonResponse({'error':'Invalid password'})

    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'invalid username'})



def signout(request, id):
    logout(request)

    #TODO User logout even they are not signin

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()

    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'invalid user ID'})

    return JsonResponse({"sucess" : "logout success"})


class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create': [AllowAny]}

    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
            
        except KeyError:
            return [permission() for permission in self.permission_classes]