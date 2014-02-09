from models import User, Status
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ('user_id', 'name')

class StatusSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Status
		fields = ('temp', 'date' , 'user')