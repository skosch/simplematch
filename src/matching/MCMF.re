 /* Based on code by Frank Chu and Igor Naverniouk
 * (http://shygypsy.com/tools/mcmf4.cpp) */
let runMinCostMaxFlow: (int, array(array(int)), array(array(int)), int, int) => 
                       {."flow": int, "cost": int, "fnet": array(array(int))} = [%bs.raw {|

function MinCostMaxFlow(n, cap, cost, s, t) {
     
       //let cap = new Array(n + 1).map(() => new Array(n + 1));
       //let cost = new Array(n + 1).map(() => new Array(n + 1));
       let qs = 0; // int
       let fnet = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
       let adj = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
       let d = new Array(n + 1).fill(0);
       let pi = new Array(n + 1).fill(0);
       let deg = new Array(n + 1).fill(0);
       let par = new Array(n + 1).fill(0);
       let q = new Array(n + 1).fill(0);
       let inq = new Array(n + 1).fill(0);
       
       
       const dijkstra = (s /*int*/, t /* int */) => {
         d.fill(Infinity);
         par.fill(-1);
         inq.fill(-1);
         d[s] = qs = 0;
         inq[q[qs++] = s] = 0;
         par[s] = n;
         
         while(qs)	{
           let u = q[0]; inq[u] = -1;
           q[0] = q[--qs];
           if( qs ) {
             inq[q[0]] = 0;
           }
           for( let i = 0, j = 2*i + 1, t; j < qs; i = j, j = 2*i + 1 ) {
             if( j + 1 < qs && d[q[j + 1]] < d[q[j]] ) {
               j++;
             }
             if( d[q[j]] >= d[q[i]] ) {
               break; 
             }
             t = q[i]; q[i] = q[j]; q[j] = t; 
             t = inq[q[i]]; inq[q[i]] = inq[q[j]]; inq[q[j]] = t; 
           }
           for (let k = 0, v = adj[u][k]; k < deg[u]; v = adj[u][++k]) {
             if( fnet[v][u] && d[v] > (d[u]+pi[u]-pi[v]) - cost[v][u] ) {
               d[v] = (d[u]+pi[u]-pi[v]) - cost[v][par[v] = u];			
             }
             if( fnet[u][v] < cap[u][v] && d[v] > (d[u]+pi[u]-pi[v]) + cost[u][v] ) {
               d[v] = (d[u]+pi[u]-pi[v]) + cost[par[v] = u][v];
             }
             if( par[v] == u ) {
               if( inq[v] < 0 ) {
                 inq[q[qs] = v] = qs; qs++;
               }
               for (let i = inq[v], j = (inq[v] - 1)/2, t; d[q[i]] < d[q[j]]; i = j, j = ( i - 1 )/2 ) {
                 t = q[i]; q[i] = q[j]; q[j] = t; 
                 t = inq[q[i]]; inq[q[i]] = inq[q[j]]; inq[q[j]] = t; 
               }
             }
           }
         }
         for( let i = 0; i < n; i++ ) {
           if( pi[i] < Infinity ) {
             pi[i] += d[i];
           }
         } 
         return par[t] >= 0;
       }
     
       // Returns: {flow, fcost: total cost} between source s and sink t
       // Call this once only. fnet[i][j] contains the flow from i to j.
       // Careful, fnet[i][j] and fnet[j][i] could both be positive.
       
       // s is source, t is sink
       const mcmf4 = (s /* int */, t /* int */) => {
         for( let i = 0; i < n; i++ ) {
           for( let j = 0; j < n; j++ ) {
             if( cap[i][j] || cap[j][i] ) {
               adj[i][deg[i]++] = j;
             }
           }
         }

         let flow = 0; let fcost = 0;
         while( dijkstra( s, t ) ) {
           let bot = Infinity;
           for( let v = t, u = par[v]; v != s; u = par[v = u] ) {
             bot = Math.min(bot, fnet[v][u] ? fnet[v][u] : ( cap[u][v] - fnet[u][v] ));
           }
           for( let v = t, u = par[v]; v != s; u = par[v = u] ) {
             if( fnet[v][u] ) { 
               fnet[v][u] -= bot; fcost -= bot * cost[v][u];
             } else { 
               fnet[u][v] += bot; fcost += bot * cost[u][v];
             }
           }
           flow += bot;
         }
         return {flow, fcost, fnet};
       }
       
       return mcmf4(s, t);
     }
     
|}
];
