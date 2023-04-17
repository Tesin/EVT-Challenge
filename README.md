This is a [Next.js](https://nextjs.org/) application that leverages TypeScript.

# Getting Started

## Raw quick start:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker quick start:

```bash
docker container run -d -p 3000:3000 tesin/evt-challenge:main-25
```

Images can be found on [DockerHub](https://hub.docker.com/repository/docker/tesin/evt-challenge/general)

## Kubernetes quick start:

```bash
helm install evt-challenge ./k8s -n evt-challenge
```

For now you have to port forward until EVT-005 is done.

```bash
kc -n evt-challenge port-forward evt-challenge-5d7fc94f79-fn4cp 9001:3000
```

```bash
./create_cluster.sh
{"vke_cluster":{"id":"d3153ca9-9caa-43e1-bd97-bdad73f17c58","label":"evt","date_created":"2023-04-17T03:02:21+00:00","cluster_subnet":"10.244.0.0\/16","service_subnet":"10.96.0.0\/12","ip":"0.0.0.0","endpoint":"d3153ca9-9caa-43e1-bd97-bdad73f17c58.vultr-k8s.com","version":"v1.26.2+2","region":"dfw","status":"pending","node_pools":[{"id":"40650941-7597-47e2-8e3a-c1f29fa45f75","date_created":"2023-04-17T03:02:22+00:00","date_updated":"2023-04-17T03:02:25+00:00","label":"my-label","tag":"my-tag","plan":"vc2-1c-2gb","status":"pending","min_nodes":2,"max_nodes":5,"auto_scaler":true,"node_quantity":2,"nodes":[{"id":"8098ac38-be32-4524-8b6c-57643bdd6b3e","label":"my-label-b97544c48d74","date_created":"2023-04-17T03:02:22+00:00","status":"pending"},{"id":"b70ca320-2db4-4159-81da-436b837e6094","label":"my-label-a083b87a7628","date_created":"2023-04-17T03:02:24+00:00","status":"pending"}]}]}}
```
