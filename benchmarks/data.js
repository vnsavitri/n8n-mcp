window.BENCHMARK_DATA = {
  "lastUpdate": 1757330727826,
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
      },
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
          "id": "cac43ed3843e100c7a225a5519510c8f8d296595",
          "message": "Merge pull request #155 from czlonkowski/update-n8n-dependencies\n\nchore: update n8n dependencies to v1.107.4",
          "timestamp": "2025-08-20T19:53:10+02:00",
          "tree_id": "22242f23b6c77f2ac5d007164e37e81514fa536c",
          "url": "https://github.com/vnsavitri/n8n-mcp/commit/cac43ed3843e100c7a225a5519510c8f8d296595"
        },
        "date": 1756774386978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0187,
            "unit": "ms",
            "range": 0.2813,
            "extra": "53424 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2521,
            "unit": "ms",
            "range": 1.6578,
            "extra": "308 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2799,
            "extra": "213634 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0668,
            "unit": "ms",
            "range": 0.40779999999999994,
            "extra": "14962 ops/sec"
          }
        ]
      },
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
          "id": "9e79b53465fc9c5ea368a316e14e52161b45e529",
          "message": "Merge pull request #178 from amauryconstant/feature/add-readonly-isArchived-property\n\nAdd isArchived field to workflow responses and types",
          "timestamp": "2025-09-04T15:42:20+02:00",
          "tree_id": "f25f250fb33a322faeed9f0fc4abf58cbb6f6f5b",
          "url": "https://github.com/vnsavitri/n8n-mcp/commit/9e79b53465fc9c5ea368a316e14e52161b45e529"
        },
        "date": 1757330727122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "range": "0.4299",
            "unit": "ms",
            "extra": "52924 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1696,
            "range": "0.6916000000000002",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.27390000000000003",
            "unit": "ms",
            "extra": "213141 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0669,
            "range": "0.356",
            "unit": "ms",
            "extra": "14953 ops/sec"
          }
        ]
      }
    ]
  }
}