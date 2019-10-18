from rest_framework import routers
from .api import BlogsViewSet

router = routers.DefaultRouter()
router.register('api/Blog', BlogsViewSet, 'blogs')

urlpatterns = router.urls 