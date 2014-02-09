from django.db import models

class User(models.Model):
	user_id = models.CharField(max_length=10)
	name = models.CharField(max_length=30)

	def __unicode__(self):
		return "%s - %s" % (self.user_id,self.name)

class Status(models.Model):
	temp = models.CharField(max_length=10)
	date = models.DateTimeField()
	user = models.ForeignKey(User)

	def __unicode__(self):
		return "User: %s - Data: %s - %s C" % (self.user.name, self.date, self.temp)
