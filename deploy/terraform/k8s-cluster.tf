resource "vultr_kubernetes" "evt" {
    region = "ewr"
    version = "v1.24.11+2"
    label = "evt"
} 

# This resource must be created and attached to the cluster
# before removing the default node from the vultr_kubernetes resource
resource "vultr_kubernetes_node_pools" "workers" {
    cluster_id = vultr_kubernetes.evt.id
    node_quantity = 2
    plan = "vc2-4c-8gb"
    label = "work_please"
}