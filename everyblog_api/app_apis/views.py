from django.shortcuts import render
from rest_framework import generics
from .models import MyPost
from .models import HomePost
from .serializers import DataSerializer
from .serializers import HomeSerializer

class ListData(generics.ListCreateAPIView):
   queryset = MyPost.objects.all() 
   serializer_class = DataSerializer
  
class Detail(generics.RetrieveUpdateDestroyAPIView):
   queryset = MyPost.objects.all() 
   serializer_class = DataSerializer

class HomeListData(generics.ListCreateAPIView):
    queryset = HomePost.objects.all()
    serializer_class = HomeSerializer
  
class HomeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = HomePost.objects.all()
    serializer_class = HomeSerializer