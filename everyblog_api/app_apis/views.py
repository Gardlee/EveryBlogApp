from django.shortcuts import render
from rest_framework import generics
from .models import MyPost
from .models import HomePost
from .serializers import DataSerializer
from .serializers import HomeSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

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

def delete_post(request, post_id):
    # Get the post object
    post = get_object_or_404(MyPost, pk=post_id)
    
    if request.method == 'DELETE':
        # Delete the post
        post.delete()
        return JsonResponse({'message': 'Post deleted successfully'}, status=204)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)