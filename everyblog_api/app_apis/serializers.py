from rest_framework import serializers
from .models import MyPost
from .models import HomePost


class DataSerializer(serializers.ModelSerializer):
   class Meta:
       fields = (
           'id',
           'name',
           'imageUrl',
           'detail',
           'likes'
       )
       model = MyPost
class HomeSerializer(serializers.ModelSerializer):
    class Meta:
       fields= (
           'id',
           'username',
           'userUrl',
           'name',
           'imageUrl',
           'detail',
           'likes'
       )
       model = HomePost

       
