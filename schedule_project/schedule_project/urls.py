from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    (r'^admin-schedule-modal', TemplateView.as_view(template_name='admin-schedule-modal.html')),
    (r'^teacher-schedule-modal', TemplateView.as_view(template_name='teacher-schedule-modal.html')),
    url(r'^$', 'schedule.views.admin_schedule'),
    url(r'^(?P<date>\d{2}-\d{2}-\d{4})$', 'schedule.views.admin_schedule'),
    url(r'^get-room-list$', 'schedule.views.ajax_get_room_list'),
    url(r'^free-time$', 'schedule.views.free_time'),
    url(r'^make-regular$', 'schedule.views.ajax_make_regular'),
    url(r'^teacher-schedule$', 'schedule.views.teacher_schedule'),
    url(r'^teacher-schedule/(?P<date>\d{2}-\d{2}-\d{4})$', 'schedule.views.teacher_schedule'),
    url(r'^apply-settings$', 'schedule.views.ajax_apply_settings'),
    url(r'^save-schedule$', 'schedule.views.ajax_save_schedule'),
    url(r'^get-hour-details$', 'schedule.views.ajax_get_hour_details'),
    url(r'^delete-schedule$', 'schedule.views.ajax_delete_schedule'),
    url(r'^teachers-and-students$', 'schedule.views.ajax_teachers_and_students'),
    url(r'^load-admin-schedule/(?P<date>\d{2}-\d{2}-\d{4})$', 'schedule.views.ajax_load_admin_schedule'),
    url(r'^load-teacher-schedule/(?P<date>\d{2}-\d{2}-\d{4})$', 'schedule.views.ajax_load_teacher_schedule'),
    url(r'^load-free-time$', 'schedule.views.ajax_load_free_time'),
    url(r'^save-free-time$', 'schedule.views.ajax_save_free_time'),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc', include('django.contrib.admindocs.urls')),

    url(r'^login$', 'django.contrib.auth.views.login', {'template_name': 'login.html'}),
    url(r'^login/$', 'django.contrib.auth.views.login', {'template_name': 'login.html'}),
    url(r'^logout$', 'schedule.views.logout_view'),

    # Uncomment the next line to enable the admin:
    url(r'^admin', include(admin.site.urls)),
)
