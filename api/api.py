from .models import test
from rest_framework import viewsets
from .serializer import TestSerializer
from rest_framework import generics
from .models import Products

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

# class ProjectInfoViewSet(generics.ListCreateAPIView):

#     queryset = test.objects.all()
#     serializer_class = TestSerializer

@api_view(['GET', 'POST'])
def students_list(request):
    if request.method == 'GET':
        data = test.objects.all()

        serializer = TestSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def tests(request):
    if request.method == 'GET':
        data = Products.objects.all()

        serializer = TestSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)