#!/bin/bash

foo=$(cat <<EOF
{
  "label": "evt",
  "region": "dfw",
  "version": "v1.26.2+2",
  "node_pools": [
    {
      "node_quantity": 2,
      "min_nodes": 2,
      "max_nodes": 5,
      "auto_scaler": true,
      "label": "my-label",
      "plan": "vc2-1c-2gb",
      "tag": "my-tag"
    }
  ]
}
EOF
)

curl "https://api.vultr.com/v2/kubernetes/clusters" \
  -H "Authorization: Bearer ${VULTR_API_KEY}" \
  -X POST \
  --data "${foo}"