# app_apis/urls.py
from django.urls import path
from . import views

urlpatterns = [
   path('', views.ListData.as_view()),
   path('<int:pk>/', views.Detail.as_view()),
   path('home', views.HomeListData.as_view()),
   path('home/<int:pk>/', views.HomeDetail.as_view()),
]
