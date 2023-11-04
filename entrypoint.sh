#!/bin/bash

# Start MySQL service
echo "Starting MySQL..."
service mysql start
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start MySQL: $status"
  exit $status
fi

# Change to 'tomcat' user and start Tomcat
echo "Starting Tomcat..."
su tomcat -s /bin/bash -c "/usr/local/tomcat/bin/catalina.sh run"

