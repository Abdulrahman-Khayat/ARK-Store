from django.contrib import admin
from .models import Products, Brands, Categories, Status
# Register your models here.

admin.site.register([Products, Brands, Categories, Status])