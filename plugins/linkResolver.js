/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function(doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'gallery') {
    return '/gallery/' + doc.uid;
  }

  return '/not-found';
}
