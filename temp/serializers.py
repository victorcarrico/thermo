from models import User, Status
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ('user_id', 'name', 'on')

class StatusSerializer(serializers.Serializer):
	temp = serializers.CharField(max_length=10)
	date = serializers.DateTimeField()
	user = serializers.CharField(max_length=100)