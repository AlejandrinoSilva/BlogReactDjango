from rest_framework import serializers
from blogs.models import Blogs

class BlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = '__all__'