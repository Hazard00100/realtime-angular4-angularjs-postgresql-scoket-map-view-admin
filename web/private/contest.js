Backend: Nodejs - core expressjs
Front: angularjs1 or 2
Database: PostgresSQL

Create one interactive page (with as good layout and animation as you can) which:
  * allow user to pick a random location in a google map
  * the server then scan the map from that point up to 20km radius to find and store in database these location:
  * Hospital, School/university, Park, Supermarket (eg supermarket, 7-eleven…)
  * Information include: Name, location (longitude/latitude), address, type (Hospital,School,Park,Supermarket), Status (Approve/deny/pending).
  * Bonus - bắt được diện tích ước lượng của khu vực đó
  * Admin backend to see those location-submissions with details and approve or decline the submission
  * The first page’s map also allows user see approved locations in that area (different types have different badges Hospital, School, Park, Supermarket)
  * Bonus: display in real-time:  if there is new approved location, user dont need to refresh page to see, but the badge will automatically appear.
  * Cần có readme với instruction bằng tiếng anh, hướng dẫn cách cài từ đầu đến cuối bản test của bạn trên local linux/macOS để chạy - assume the server is new and has nothing


198
