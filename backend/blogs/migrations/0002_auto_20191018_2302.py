# Generated by Django 2.2.6 on 2019-10-18 23:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='blogs',
            new_name='Blog',
        ),
    ]
