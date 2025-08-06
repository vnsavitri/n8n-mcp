window.BENCHMARK_DATA = {
  "lastUpdate": 1754523062438,
  "repoUrl": "https://github.com/vnsavitri/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e322ad590f44ff0f5623d35896781ed1b9f852d",
          "message": "Merge pull request #127 from czlonkowski/test/ci-permission-fixes\n\nfix: handle GitHub Actions permission errors gracefully",
          "timestamp": "2025-08-06T22:39:36+02:00",
          "tree_id": "04291aebeb6390696be2181e090475f790aa9551",
          "url": "https://github.com/vnsavitri/n8n-mcp/commit/9e322ad590f44ff0f5623d35896781ed1b9f852d"
        },
        "date": 1754523062181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0187,
            "unit": "ms",
            "range": 0.2454,
            "extra": "53486 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1375,
            "unit": "ms",
            "range": 0.46540000000000026,
            "extra": "319 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "unit": "ms",
            "range": 0.5109,
            "extra": "198969 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "unit": "ms",
            "range": 0.3116,
            "extra": "15097 ops/sec"
          }
        ]
      }
    ]
  }
}