from django.conf.urls import patterns, url, include
from rest_framework.urlpatterns import format_suffix_patterns
#from rest_framework import routers
from temp import views

#router = routers.DefaultRouter()
#router.register(r'users', views.UserViewSet)
#router.register(r'status', views.StatusViewSet)

urlpatterns = patterns('',
	#url(r'^', include(router.urls)),
	url(r'^users/$', views.UserList.as_view()),
	url(r'^status/$', views.StatusList.as_view()),
	url(r'^status/(?P<pk>[0-9]+)/$', views.StatusDetail.as_view()),
	)

