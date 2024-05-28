from django.contrib import admin
from app_apis.models import MyPost
from app_apis.models import HomePost


# Register your models here.
admin.site.register(MyPost)
admin.site.register(HomePost)

