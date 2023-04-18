#!/bin/bash

# This script expects the CLUSTER_ID to come from an environment variable.

API_ENDPOINT="https://api.vultr.com/v2/kubernetes/clusters/${CLUSTER_ID}"

curl ${API_ENDPOINT}" \
  -H "Authorization: Bearer ${VULTR_API_KEY}" \
  -X DELETE