
from rest_framework import serializers
from .models import Products

# project serializer

class TestSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Products
        fields = ['name','description']