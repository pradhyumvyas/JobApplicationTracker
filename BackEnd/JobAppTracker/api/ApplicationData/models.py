from django.db import models

# Create your models here.


class ApplicationData(models.Model):

    JOB_TYPES = (
        ('I','Internship'),
        ('J', 'Full Time')
    )

    serialNumber = models.IntegerField()
    username = models.CharField(max_length=250)

    companyName = models.CharField(max_length=300)
    applyDate = models.DateField()
    responseDate = models.DateField()
    jobLocation = models.CharField(max_length=150)

    jobProfile = models.CharField(max_length=150)
    jobType = models.CharField(max_length=50, choices=JOB_TYPES)

    Status = models.CharField(max_length=100)

    def __str__(self):
        return self.companyName
    
