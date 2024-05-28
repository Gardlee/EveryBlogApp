from django.db import models

class MyPost(models.Model):
   name = models.CharField(max_length=100)
   imageUrl = models.URLField(default='')
   detail = models.CharField(max_length=100 , default='')
   likes = models.IntegerField(default=0)
  
   def __str__(self):
       return self.name

class HomePost(models.Model):
   username = models.CharField(max_length=100)
   userUrl = models.URLField(default='')
   name = models.CharField(max_length=100)
   imageUrl = models.URLField(default='')
   detail = models.CharField(max_length=100 , default='')
   likes = models.IntegerField(default=0)
  
   def __str__(self):
       return self.name