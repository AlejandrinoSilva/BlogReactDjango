from blogs.models import Blog
from rest_framework import viewsets, permissions
from .serializers import BlogSerializer

class BlogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = BlogSerializer

    def get_queryset(self):
        return self.request.user.blogs.all()

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)
