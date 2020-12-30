
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if(!(vertex in this.adjList)){
      this.adjList[vertex]= [];
    }
  }

  addEdges(srcValue, destValue) {
    if(!this.adjList[srcValue]) this.addVertex(srcValue)
    if(!this.adjList[destValue]) this.addVertex(destValue)
    let srcVertices = this.adjList[srcValue]
    let destVertices= this.adjList[destValue]
    srcVertices.push(destValue)
    destVertices.push(srcValue)

  }

  buildGraph(edges) {
    
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









