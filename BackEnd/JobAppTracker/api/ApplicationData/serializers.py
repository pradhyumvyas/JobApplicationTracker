from rest_framework import serializers
from .models import ApplicationData, CompanyList

class DataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ApplicationData
        fields = ('id','username','companyName', 'applyDate', 'jobProfile','responseDate', 'jobLocation', 'jobType', 'status')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CompanyList
        fields = ('companyID', 'companyName', 'companyDiscription')