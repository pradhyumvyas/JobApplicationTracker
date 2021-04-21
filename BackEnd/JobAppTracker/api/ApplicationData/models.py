from django.db import models

# Create your models here.


class ApplicationData(models.Model):

    JOB_TYPES = (
        ('Internship','Internship'),
        ('Full Time', 'Full Time')
    )

    username = models.CharField(max_length=250)
    id = models.AutoField(primary_key=True)

    companyName = models.CharField(max_length=300)
    applyDate = models.DateField()
    responseDate = models.DateField() 
    jobLocation = models.CharField(max_length=150)

    jobProfile = models.CharField(max_length=150)
    jobType = models.CharField(max_length=150, choices=JOB_TYPES)

    STATUS = (
        ('Rejected', 'Rejected'),
        ('Selected', 'Selected'),
        ('Pending', 'Pending')
    )

    status = models.CharField(max_length=100, choices=STATUS)

    def __str__(self):
        return self.companyName 

class CompanyList(models.Model):
    companyID = models.IntegerField()
    companyName = models.CharField(max_length=150)
    companyDiscription = models.TextField(default="Not defined as of Now")

    def __str__(self):
        return self.companyName
    