from rest_framework import serializers
from .models import ApplicationData

class DataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ApplicationData
        fields = ('id','companyName', 'applyDate', 'jobProfile','responseDate', 'jobLocation', 'jobType', 'status')
