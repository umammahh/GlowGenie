from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user']


admin.site.register(User, UserAdmin)
admin.site.register(Profile,ProfileAdmin)









# class UserProfileInline(admin.StackedInline):
#     model = UserProfile
#     can_delete = False
#     verbose_name_plural = 'Profile'

# class CustomUserAdmin(UserAdmin):
#     inlines = (UserProfileInline,)
#     list_display = ('email', 'first_name', 'last_name', 'is_staff', 'date_joined')
#     ordering = ('-date_joined',)
#     search_fields = ('email', 'first_name', 'last_name')
    
#     # Override fieldsets to remove username and add email
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal info', {'fields': ('first_name', 'last_name')}),
#         ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
#         ('Important dates', {'fields': ('last_login', 'date_joined')}),
#     )
    
#     # Override add_fieldsets to remove username and add email
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'password1', 'password2'),
#         }),
#     )

# admin.site.register(CustomUser, CustomUserAdmin)
