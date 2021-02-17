# from django.shortcuts import render

# Create your views here.


from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets

# Create your views here.

from .serializers import DataSerializer
from .models import ApplicationData
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model


def validate_user_session(id, token):
    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False

@csrf_exempt
def add(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({"errror":"please Login"})
    if request.method == "POST":
        print("JHIIIIIIIIIIIIIIIIIIIIIIII")

        user_id = id
        companyName = request.POST['companyName']
        applyDate = request.POST['applyDate']
        responseDate = request.POST['responseDate']
        jobLocation = request.POST['jobLocation']
        jobType = request.POST['jobType']
        status = request.POST = ['status']

        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return JsonResponse({'error':'User does not exist'})

        newData = ApplicationData(companyName= companyName, applyDate=applyDate, responseDate=responseDate, jobLocation=jobLocation, jobType=jobType, status=status)
        newData.save()
    return JsonResponse({'error':'i am'})


class DataViewSet(viewsets.ModelViewSet):
    queryset = ApplicationData.objects.all()
    serializer_class = DataSerializer
