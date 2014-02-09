from models import User, Status
from rest_framework import viewsets
from serializers import UserSerializer, StatusSerializer

from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class StatusList(APIView):

	def get(self, request, format=None):
		statuss = Status.objects.all()
		serializer = StatusSerializer(statuss, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):

		user_id = request.DATA['user_id']
		date = request.DATA['date']
		temp = request.DATA['temp']

		user = User.objects.get(user_id=user_id)
		user_status = Status(temp = temp, date = date, user = user)
		user_status.save()

		return HttpResponse(content=user_status, status=status.HTTP_201_CREATED)

		#serializer = StatusSerializer(data=user_status)
		#if serializer.is_valid():
		#serializer.save()
		#return Response(serializer.data, status=status.HTTP_201_CREATED)
		#return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StatusDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Status.objects.get(pk=pk)
        except Status.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        status = self.get_object(pk)
        serializer = SnippetSerializer(status, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        status = self.get_object(pk)
        status.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


