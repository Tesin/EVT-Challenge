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
