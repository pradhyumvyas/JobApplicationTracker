
from django.urls import path, include
from rest_framework import routers 
from . import views

router = routers.DefaultRouter() 
router.register(r'',views.DataViewSet)

urlpatterns = [
    path('add/<str:id>/<str:token>/',  views.add, name='data.add'),
    path('data/<str:id>/', views.fetchData, name='fetchData'),
    path('companyLists/', views.companyLists, name='companyLists'),
    path('', include(router.urls)),
    # path(r'', views.DataViewSet, name='mydata')
]
